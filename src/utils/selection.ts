export const selectAllTextContent = <T extends React.SyntheticEvent>(
  element: T
) => {
  const range = document.createRange()
  range.selectNodeContents(element.currentTarget)

  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
}

export const deselectAllTextContent = () => {
  if (window.getSelection) {
    const selection = window.getSelection()
    selection?.removeAllRanges()
  }
}
