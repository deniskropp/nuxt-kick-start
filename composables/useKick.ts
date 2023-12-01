export function useKick(constants: any) {
    const { messages, generate } = useChat(constants)

    const markdown = ref('')
    const pending = ref(false)

    const ask = () => {
        async function run() {
            pending.value = true

            markdown.value = await generate(messages)

            pending.value = false
        }

        run()
    }

    return {
        markdown,
        pending,
        ask,
        messages,
        generate
    }
}


/*

    const toc = queryContent({
        type: 'page',
    })

    const renderToc = (tree: any[]) => {
        console.log(tree)
        let markdown = ''

        for (const node of tree) {
            if (node.type === 'heading') {
                if (node.depth === 1) {
                    markdown += `# ${node.title}\n`
                } else if (node.depth === 2) {
                    markdown += `## ${node.title}\n`
                } else {
                    markdown += `### ${node.title}\n`
                }
            } else {
                //                markdown += `${node.content}\n`
                markdown += `${node._path}\n`
            }
        }

        return markdown
    }

    const renderedToc = renderToc(await toc.find())

*/
