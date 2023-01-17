import React from 'react'
import MyTaskCSS from './MyTaskArray.module.scss'

const MyTaskArray = ({
  arrayData, handleSearch, handleText, arrayLength, setSortId, arrayHeader, setSortName
}: {
  arrayData: (string | number)[][],
  handleSearch: (event: React.FormEvent) => void,
  handleText: (event: React.FormEvent) => void,
  arrayLength: number,
  setSortId: () => void,
  arrayHeader: (string | number)[],
  setSortName: () => void
}) => {
  return (
    <div className={MyTaskCSS.container}>
      <form className={MyTaskCSS.form}>
        <input className={MyTaskCSS.input} placeholder='Search...' onChange={handleText} autoFocus />
        <button className={MyTaskCSS.button} type="submit" onClick={handleSearch}>Search</button>
      </form>
      <table className={MyTaskCSS.table}>
        <thead>
          <tr className={MyTaskCSS.tableHeader} key={arrayHeader[0]}>
            <th className={MyTaskCSS.tableData} onClick={setSortId} >{arrayHeader[0]}</th>
            <th className={MyTaskCSS.tableData} onClick={setSortName} >{arrayHeader[1]}</th>
            <th className={MyTaskCSS.tableData} >{arrayHeader[2]}</th>
            <th className={MyTaskCSS.tableData} >{arrayHeader[3]}</th>
          </tr>
        </thead>

        <tbody>
          {
            arrayData.map((row: (string | number)[]) => (
              <tr className={MyTaskCSS.tableRow} key={row[0]}>
                <td className={MyTaskCSS.tableData} >{row[0]}</td>
                <td className={MyTaskCSS.tableData} >{row[1]}</td>
                <td className={MyTaskCSS.tableData} >{row[2]} EUR</td>
                <td className={MyTaskCSS.tableData} >{row[3]}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <p className={MyTaskCSS.bottomInfo} >total: {arrayLength}</p>
      <p className={MyTaskCSS.bottomInfo} >filtered: {arrayData.length}</p>
    </div >
  )
}

export default MyTaskArray;