import { QuartzComponent, QuartzComponentConstructor } from "./types"

const ignored = ["title", "toc", "description"]

const FrontmatterMeta: QuartzComponent = ({ fileData }) => {
  const meta = fileData.frontmatter
  if (!meta) return null

  const entries = Object.entries(meta).filter(([key, value]) => {
    if (ignored.includes(key)) return false
    if (value === null || value === undefined) return false
    if (Array.isArray(value) && value.length === 0) return false
    return true
  })

  if (entries.length === 0) return null

  return (
    <div class="frontmatter-meta">
      <h3>Metadata</h3>
      <ul>
        {entries.map(([key, value]) => (
          <li>
            <strong>{key}:</strong> {Array.isArray(value) ? value.join(", ") : String(value)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default (() => FrontmatterMeta) satisfies QuartzComponentConstructor
