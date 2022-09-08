import {useManager} from '../src';
import { nestedManager, NestedState } from './base.stories';

export const ComponentFirst = () => {
  const [{counter, short, modal}, {changeCounter, changeShort, changeModalCreateOpen, changeModal, changeModalCreate}] = useManager<NestedState>(nestedManager)

  return (
    <>
    <h1>manager counter {counter}</h1>
      <h1>short {`${short}`}</h1>
      <h1>modal {JSON.stringify(modal)}</h1>
      <button onClick={() => changeCounter(counter + 1)}>
        change counter manager
      </button>
      <button onClick={() => changeModal({
        create: {
          open: true,
        }
      })}>
        change modal
      </button>
      <button onClick={() => changeModalCreate({open: true})}>
        change modal.create
      </button>
      <button onClick={() => changeModalCreateOpen(true)}>
        change modal.create.open
      </button>
      <input type="checkbox" onChange={(e) => changeShort(e.target.checked)} />
      <hr />
      </>
  )
}

export default {
  title: 'NestedState',
  component: ComponentFirst,
};