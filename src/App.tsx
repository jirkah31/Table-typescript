import React, { useState } from 'react';
import AppCSS from './App.module.scss'
import MyTaskArray from './MyTaskArray';
import { dataArray } from './SourceData'

function App() {
  const arrayHeader: (string | number)[] = dataArray[0]
  const [arrayData, setArrayData] = useState<(string | number)[][]>(dataArray.filter((row) => {
    return row[0] !== 'ID'
  }))
  const [searchText, setSearchText] = useState<string>("")
  const arrayLength: number = dataArray.length - 1

  const handleText = (event: React.FormEvent): void => {
    const text: string = (event.target as HTMLInputElement).value
    const lowerCaseSearch: string = text.toLowerCase()
    setSearchText(lowerCaseSearch)
  }

  const handleSearch = (event: React.FormEvent): void => {
    event.preventDefault()

    if (searchText !== "") {
      const filteredArray = arrayData.filter((row: (string | number)[]) => {
        return row.toString().toLowerCase().includes(searchText)
      })
      setArrayData(filteredArray)
    } else {
      setArrayData(dataArray.filter((row: (string | number)[]) => {
        return row[0] !== 'ID'
      }))
    }
  }

  const setSortId = (): void => {
    const arrayById: (string | number)[][] = [...arrayData].sort((a: any, b: any) => {
      return b[0] - a[0]
    })
    setArrayData(arrayById)
  }

  const setSortName = (): void => {
    const arrayByName = [...arrayData].sort((a: any, b: any) => {
      return a[1] > b[1] ? 1 : -1
    })
    setArrayData(arrayByName)
  }

  return (
    <div className={AppCSS.App}>
      <MyTaskArray arrayData={arrayData}
        handleSearch={handleSearch}
        handleText={handleText}
        arrayLength={arrayLength}
        setSortId={setSortId}
        arrayHeader={arrayHeader}
        setSortName={setSortName}
      />
    </div>
  )
}

export default App;
