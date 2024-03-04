import { useState, useCallback, useEffect,useRef } from 'react'
function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setnumber] = useState(false)
  const [charAllowed, setchar] = useState(false)
  const [Password, setpassword] = useState("")

  //ref hook
  const passwordRef=useRef(null);


  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass)
  }, [length, numberAllowed, charAllowed, setpassword])
  //PasswordGenerator(); explain why error

    const copyPasswordToClipboard=useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,99)
      window.navigator.clipboard.writeText(Password)
    }
    ,[Password])

  useEffect(()=>{
    PasswordGenerator();
  },[length, numberAllowed, charAllowed,PasswordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 mt-60 text-orange-800 bg-gray-500'>
        <h1 className='text-white text-center my-4'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
          className='outline-none px-3 py-0.5 shrink-0 bg-blue-600 text-white-600'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="num"
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="char"
              onChange={() => {
                setchar((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
