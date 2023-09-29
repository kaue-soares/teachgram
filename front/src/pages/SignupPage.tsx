import { Dispatch, SetStateAction, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Button from "../components/layout/form/Button.tsx"
import Input from "../components/layout/form/Input.tsx"
import LinkModal from "../components/layout/form/LinkModal.tsx"
import { validate } from "../service/validation.service.ts"

interface SignupPageProps {
  name: string
  email: string
  bio: string
  phone: string
  password: string
  photo: string
  setName: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  setBio: Dispatch<SetStateAction<string>>
  setPhone: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  setPhoto: Dispatch<SetStateAction<string>>
  handleSubmit: () => void
}

const SignupPage = ({ 
  name, email, bio, phone, password, photo,
  setName, setEmail, setBio, setPhone, setPassword, setPhoto, 
  handleSubmit, 
}: SignupPageProps) => {
  const { t } = useTranslation()

  const [ showModal, setShowModal ] = useState(false)
  const [ showMessage, setShowMessage ] = useState(false)

  const toogleShowMessage = () => {
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 5000)
  }

  const makeValidation = () => {
    const result = validate(
      [
        {
          tag: "Nome",
          value: name,
        },
        {
          tag: "E-mail",
          value: email,
          email: true,
        },
        {
          tag: "Descrição",
          value: bio,
        },
        {
          tag: "Telefone",
          value: phone,
        },
        {
          tag: "Senha",
          value: password,
        },
      ],
    )

    if (!result.flag) {
      toogleShowMessage()

      return false
    }

    return true
  }
  
  return (
    <main 
      className="w-full max-w-full min-h-screen flex justify-between"
    >
      <div
        className="flex-grow h-full min-h-screen flex flex-col items-center justify-center text-black
                  "
      >
        <div className={`relative h-full w-full flex flex-col p-12 items-center justify-start gap-8 text-black
                        lg:w-2/3 lg:gap-6 lg:pt-0 lg:px-6 lg:pb-6   lg:max-h-[calc(100vh-6rem)]
                        xl:w-1/2
                        2xl:w-1/3
                        ${showModal ? "overflow-hidden h-[calc(100vh)]" : "lg:overflow-auto"}`}>
          

          { showModal ? (
            <LinkModal
              onClose={() => setShowModal(false)}
              onSubmit={handleSubmit}
              setState={setPhoto}
              state={photo}
            />
          ) : (
            <>
              <img
                src="/images/full_logo.svg"
                alt="Teachgram"
                className="self-center mb-4"
              />

              <h2 className="font-semibold text-xl w-full
                            lg:text-lg">
                {t("signup.createaccount")}
              </h2>

              <form
                action=""
                className="w-full flex flex-col gap-4
                          lg:gap-4"
              >
                <Input
                  name={t("signup.input.label.name")}
                  type="text"
                  placeholder={t("signup.input.placeholder.name")}
                  state={name}
                  setState={setName}
                />

                <Input
                  name={t("signup.input.label.email")}
                  type="email"
                  placeholder={t("signup.input.placeholder.email")}
                  state={email}
                  setState={setEmail}
                />

                <Input
                  name={t("signup.input.label.username")}
                  type="text"
                  placeholder={t("signup.input.placeholder.username")}
                  state={bio}
                  setState={setBio}
                />

                <Input
                  name={t("signup.input.label.bio")}
                  type="text"
                  placeholder={t("signup.input.placeholder.bio")}
                  state={phone}
                  setState={setPhone}
                />

                <Input
                  name={t("signup.input.label.phone")}
                  type="text"
                  placeholder={t("signup.input.placeholder.phone")}
                  state={photo}
                  setState={setPhoto}
                />

                <Input
                  name={t("signup.input.label.password")}
                  type="password"
                  placeholder={t("signup.input.placeholder.password")} 
                  className="mb-8"
                  state={password}
                  setState={setPassword}
                />

                {showMessage && <p>faltou algo</p>}

                <Button
                  onClick={() => {
                    if(makeValidation()){
                      setShowModal(true)
                    }
                  }}
                  type="button"
                  text={t("signup.next")}
                />

              </form>

              <Link
                to={"/login"}
                className="w-full flex justify-center gap-2 text-sm"
              >
                <p>
                  {t("signup.alreadyhaveaccount")}
                </p>

                <p
                  role="button"
                  className="underline text-orange font-bold"
                >
                  {t("signup.login")}
                </p>
              </Link>
            </>
          )}
        </div>
      </div>
      <div
        className="hidden h-full justify-end
                      lg:flex "
      >
        <img
          src="/images/login_background.jpg"
          alt="Image"
          className="h-full max-h-screen"
        />
      </div>
    </main>
  )
}


export default SignupPage
