import { ItemType } from '@/types'
import DeleteItem from './DeleteItem'

interface Props extends ItemType {
  deleteItem: (id: string) => void
}

export default function Item({ _id, name, deleteItem }: Props) {
  return (
    <>
      <li>
        <input type='checkbox' id={_id} className='cursor-pointer peer mr-3' />
        <label
          htmlFor={_id}
          className='cursor-pointer mr-3 peer-checked:line-through peer-checked:text-slate-500'
        >
          {name}
        </label>
        <DeleteItem _id={_id} deleteItem={deleteItem} />
      </li>
    </>
  )
}
