export async function useKick(constants: any) {
    const { messages, generate } = await useChat(constants)

    const markdown = ref('')
    const pending = ref(false)

    const ask = () => {
        async function run() {
            markdown.value = await generate(messages)
        }

        pending.value = true

        run()
    }

    return {
        markdown,
        pending,
        ask
    }
}
