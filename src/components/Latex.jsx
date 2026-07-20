import katex from 'katex'
import 'katex/dist/katex.min.css'

export default function Latex({ tex, display = false, className = '' }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: display,
  })

  const Tag = display ? 'div' : 'span'

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
