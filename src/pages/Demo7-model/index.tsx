import { Button } from 'antd';
import NiceModal, {
  createNiceModal,
  useNiceModal,
} from './store';

// redux store

const MyModal = createNiceModal('my-modal', () => {
  return (
    <NiceModal id="my-modal" title="Nice Modal">
      Hello NiceModal!
    </NiceModal>
  );
});

function MyModalExample() {
  const modal = useNiceModal('my-modal');
  console.log('%c [ modal ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', modal)
  return (
    <>
      <Button type="primary" onClick={() => modal.show()}>
        Show Modal
      </Button>
      <MyModal />
    </>
  );
}
export default () => {
  return (
    <><h1>Nice Modal</h1><MyModalExample /></>
  );
};
