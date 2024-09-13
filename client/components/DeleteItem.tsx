'use client'

interface Props {
  _id: string
  deleteItem: (id: string) => void
}

export default function DeleteItem({ _id, deleteItem }: Props) {
  return (
    <button className='text-red-500' onClick={() => deleteItem(_id)}>
      X
    </button>
  )
}
