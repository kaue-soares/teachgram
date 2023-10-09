import { useContext } from "react"
import NavbarContext from "../../context/NavbarContext"

interface PostPopupProps {
  id: string
}

const PostPopup = ({ id }: PostPopupProps) => {
  const { changeShowDeletePostModal, changeShowUpdatePostModal } = useContext(NavbarContext)
  
  return (
    <div className="bg-white shadow-full absolute -top-2 right-full py-4 px-6 rounded-xl flex flex-col gap-4">
      <button
        className="w-full text-center font-medium text-orange text-base"
        onClick={() => changeShowUpdatePostModal(id)}
      >
        Editar
      </button>

      <button
        className="w-full text-center font-medium text-orange text-base"
        onClick={() => changeShowDeletePostModal(id)}
      >
        Excluir
      </button>
    </div>
  )
}

export default PostPopup
