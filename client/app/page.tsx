import Item from '@/components/Item'
import { ItemType } from '@/types'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

// * GET Items from server
async function getItems() {
  'use server'

  // ? disable cache to get the latest items
  const _cookies = cookies()

  const response = await fetch('http://localhost:4000/api/items')
  if (!response.ok) throw new Error('Failed to fetch items')

  return response.json()
}

// * DELETE Item from server
async function deleteItem(_id: string) {
  'use server'

  const response = await fetch(`http://localhost:4000/api/items/${_id}`, {
    method: 'DELETE',
  })

  if (!response.ok) throw new Error('Failed to delete item')

  await response.json()
  redirect('/')
}

// * Home component
export default async function Home() {
  const items = await getItems()

  return (
    <main>
      <h1 className='text-3xl font-bold mb-4'>Todo List</h1>

      <Link
        href='/new'
        className='border border-black text-black rounded p-2 hover:bg-white hover:text-black'
      >
        New Item +
      </Link>

      {/* Items List */}
      <ul className='mt-4'>
        {items.map((item: ItemType) => (
          <Item key={item._id} {...item} deleteItem={deleteItem} />
        ))}
      </ul>
    </main>
  )
}
