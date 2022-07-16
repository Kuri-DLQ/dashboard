const CurrMessageView = ({message, setShowMessage, showMessage}) => {
  const parsedAttributes = JSON.parse(message.Attributes)
  const attributes = Object.keys(parsedAttributes);

  return (
    <>
      <ul>
        <li>{message.id}</li>
        <li>{message.Message}</li>
        <li>{message.Attributes}</li>
      </ul>

      {attributes.map(attribute => {
        return (
          <>
            <p>Message attribute: {attribute}</p>
            <p>
              Type: {parsedAttributes[attribute]["Type"]}
            </p>
            <p>
              Value: {parsedAttributes[attribute]["Value"]}
            </p>
          </>
          )
        })
      }
      <button onClick={() => {setShowMessage(!showMessage)}}>Cancel</button>
    </>
  )
}

export default CurrMessageView;