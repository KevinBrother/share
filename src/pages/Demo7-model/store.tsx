import { makeAutoObservable } from 'mobx';
import React, { useCallback, useState } from 'react';
import { Modal } from 'antd';

interface IModalApi {
  show: (visible?: boolean) => void;
  hide: (visible?: boolean) => void;
  visible: boolean;
}

interface IModals {
  [key: string]: IModalApi
}

class ModalStore {

  modals: IModals = {};
  constructor() {
    makeAutoObservable(this);
  }
  setModal(modalId: string, modalApi: IModalApi) {
    this.modals[modalId] = modalApi;
  }
}

const modalStore = new ModalStore();


export const useNiceModal = (modalId: string) => {
  const [visible, setVisible] = useState(false);

  let modalApi = modalStore.modals[modalId];
  if (modalApi) {
    return modalApi;
  }

  const show = useCallback(
    () => {
      setVisible(true)
    },
    [modalId]
  );

  const hide = useCallback(
    () => {
      setVisible(false)
    },
    [modalId]
  );

  modalApi = { show, hide, visible }
  modalStore.setModal(modalId, modalApi);

  return modalApi;
};

export const createNiceModal = (modalId: string, Comp) => {
  return (props: any) => {
    const { visible } = useNiceModal(modalId);
    if (!visible) return null;
    return <Comp  {...props} />;
  };
};

export default function NiceModal({ id, children, ...rest }) {
  const { hide, visible } = useNiceModal(id);
  console.log('%c [ visible ]-69', 'font-size:13px; background:pink; color:#bf2c9f;', visible)
  return (
    <Modal
      onCancel={() => hide()}
      onOk={() => hide()}
      afterClose={() => hide()}
      visible={visible}
      {...rest}
    >
      {children}
    </Modal>
  );
}
