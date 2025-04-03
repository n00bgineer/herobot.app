import useStore from 'src/state/store'

const ModalRouter = () => {
  // GETTING GLOBAL STATES
  const { modalData } = useStore() || {}
  const { modalType } = modalData

  if (modalType === '') return <></>
  else return <></>
}

export default ModalRouter
