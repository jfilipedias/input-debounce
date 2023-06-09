import { DefaultInput } from './components/DefaultInput'

export function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#101010]">
      <main className="w-[71ch]">
        <h1 className="mb-6 text-2xl font-bold text-white">
          Exemplo de input com debounce
        </h1>

        <p className="mb-5 text-[#a3a3a3]">
          Esse exemplo foi desenvolvido para o artigo{' '}
          <a
            className="font-bold text-white underline decoration-[#404040] underline-offset-2"
            href="https://filipedias.dev/blog/otimizacao-de-buscas-aplicando-debounce-em-inputs"
            title="Artigo no site filipedias.dev"
          >
            Otimização de buscas aplicando debounce em inputs
          </a>
          .
        </p>

        <div className="flex h-56 items-center gap-10 rounded-md border border-[#262626] bg-[#171717] p-10">
          <DefaultInput />
          <DefaultInput />
        </div>
      </main>
    </div>
  )
}
