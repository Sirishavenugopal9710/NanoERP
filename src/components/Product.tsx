// import React from 'react'
// import './Product.scss'
// export const Product = () => {
//     return (
//         <div>

//             <div className="container">


//                 <div className="view mt-30 bg-dark flex">
//                     <div className="view w-48 p-4-8">
//                         <input type="text" className="input white bold" placeholder="" value="Item Description"></input>
//                     </div>
//                     <div className="view w-17 p-4-8">
//                         <input type="text" className="input white bold right" placeholder="" value="Qty"></input>
//                     </div>
//                     <div className="view w-17 p-4-8">
//                         <input type="text" className="input white bold right" placeholder="" value="Rate"></input>
//                     </div>
//                     <div className="view w-18 p-4-8">
//                         <input type="text" className="input white bold right" placeholder="" value="Amount"></input>
//                     </div>
//                 </div>
//                 <div className="view row flex __web-inspector-hide-shortcut__">
//                     <div className="view w-48 p-4-8 pb-10">
//                         <textarea className="input dark" placeholder="Enter item name/description" style={{ height: "48px !important" }}>  </textarea>
//                     </div>
//                     <div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-18 p-4-8 pb-10">
//                         <span className="span dark right">0.00</span>
//                     </div>
//                     <button className="link row__remove" aria-label="Remove Row" title="Remove Row">
//                         <span className="icon icon-remove bg-red">
//                         </span>
//                     </button>
//                 </div>
//                 <div className="view row flex __web-inspector-hide-shortcut__">
//                     <div className="view w-48 p-4-8 pb-10">
//                         <textarea className="input dark" placeholder="Enter item name/description" style={{ height: "48px !important" }}>  </textarea>
//                     </div>
//                     <div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-18 p-4-8 pb-10">
//                         <span className="span dark right">0.00</span>
//                     </div>
//                     <button className="link row__remove" aria-label="Remove Row" title="Remove Row">
//                         <span className="icon icon-remove bg-red">
//                         </span>
//                     </button>
//                 </div>
//                 <div className="view row flex __web-inspector-hide-shortcut__">
//                     <div className="view w-48 p-4-8 pb-10">
//                         <textarea className="input dark" placeholder="Enter item name/description" style={{ height: "48px !important" }}>  </textarea>
//                     </div>
//                     <div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-18 p-4-8 pb-10">
//                         <span className="span dark right">0.00</span>
//                     </div>
//                     <button className="link row__remove" aria-label="Remove Row" title="Remove Row">
//                         <span className="icon icon-remove bg-red">
//                         </span>
//                     </button>
//                 </div>
//                 <div className="view row flex __web-inspector-hide-shortcut__">
//                     <div className="view w-48 p-4-8 pb-10">
//                         <textarea className="input dark" placeholder="Enter item name/description" style={{ height: "48px !important" }}>  </textarea>
//                     </div>
//                     <div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-18 p-4-8 pb-10">
//                         <span className="span dark right">0.00</span>
//                     </div>
//                     <button className="link row__remove" aria-label="Remove Row" title="Remove Row">
//                         <span className="icon icon-remove bg-red">
//                         </span>
//                     </button>
//                 </div>
//                 <div className="view row flex __web-inspector-hide-shortcut__">
//                     <div className="view w-48 p-4-8 pb-10">
//                         <textarea className="input dark" placeholder="Enter item name/description" style={{ height: "48px !important" }}>  </textarea>
//                     </div>
//                     <div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-17 p-4-8 pb-10">
//                         <input type="text" className="input dark right" placeholder="" value=" "></input>
//                     </div><div className="view w-18 p-4-8 pb-10">
//                         <span className="span dark right">0.00</span>
//                     </div>
//                     <button className="link row__remove" aria-label="Remove Row" title="Remove Row">
//                         <span className="icon icon-remove bg-red">
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }





import React, { FC, useState, useEffect } from 'react'
import { Invoice, ProductLine } from '../data/types'
import { initialInvoice, initialProductLine } from '../data/initialData'
import EditableInput from './EditableInput'
import EditableSelect from './EditableSelect'
import EditableTextarea from './EditableTextarea'
import EditableCalendarInput from './EditableCalendarInput'
import countryList from '../data/countryList'
import Document from './Document'
import Page from './Page'
import View from './View'
import Text from './Text'
import { Font } from '@react-pdf/renderer'
import Download from './DownloadPDF'
import format from 'date-fns/format'

Font.register({
  family: 'Nunito',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf' },
    { src: 'https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf', fontWeight: 600 },
  ],
})

interface Props {
  data?: Invoice
  pdfMode?: boolean
}

export const Product: FC<Props> = ({ data, pdfMode }) => {
  const [invoice, setInvoice] = useState<Invoice>(data ? { ...data } : { ...initialInvoice })
  const [subTotal, setSubTotal] = useState<number>()
  const [saleTax, setSaleTax] = useState<number>()

  
  
  const handleChange = (name: keyof Invoice, value: string) => {
    if (name !== 'productLines') {
      const newInvoice = { ...invoice }
      newInvoice[name] = value

      setInvoice(newInvoice)
    }
  }

  const handleProductLineChange = (index: number, name: keyof ProductLine, value: string) => {
    const productLines = invoice.productLines.map((productLine, i) => {
      if (i === index) {
        const newProductLine = { ...productLine }

        if (name === 'description') {
          newProductLine[name] = value
        } else {
          if (
            value[value.length - 1] === '.' ||
            (value[value.length - 1] === '0' && value.includes('.'))
          ) {
            newProductLine[name] = value
          } else {
            const n = parseFloat(value)

            newProductLine[name] = (n ? n : 0).toString()
          }
        }

        return newProductLine
      }

      return { ...productLine }
    })

    setInvoice({ ...invoice, productLines })
  }

  const handleRemove = (i: number) => {
    const productLines = invoice.productLines.filter((productLine, index) => index !== i)

    setInvoice({ ...invoice, productLines })
  }

  const handleAdd = () => {
    const productLines = [...invoice.productLines, { ...initialProductLine }]

    setInvoice({ ...invoice, productLines })
  }

  const calculateAmount = (quantity: string, rate: string) => {
    const quantityNumber = parseFloat(quantity)
    const rateNumber = parseFloat(rate)
    const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0

    return amount.toFixed(2)
  }

  useEffect(() => {
    let subTotal = 0

    invoice.productLines.forEach((productLine) => {
      const quantityNumber = parseFloat(productLine.quantity)
      const rateNumber = parseFloat(productLine.rate)
      const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0

      subTotal += amount
    })

    setSubTotal(subTotal)
  }, [invoice.productLines])

  useEffect(() => {
    const match = invoice.taxLabel.match(/(\d+)%/)
    const taxRate = match ? parseFloat(match[1]) : 0
    const saleTax = subTotal ? (subTotal * taxRate) / 100 : 0

    setSaleTax(saleTax)
  }, [subTotal, invoice.taxLabel])

  return (
    <Document pdfMode={pdfMode}>
      <Page className="invoice-wrapper" pdfMode={pdfMode}>
        {!pdfMode && <Download data={invoice} />}

        

      

        <View className="mt-30 bg-dark flex" pdfMode={pdfMode}>
          <View className="w-48 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.productLineDescription}
              onChange={(value) => handleChange('productLineDescription', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-17 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.productLineQuantity}
              onChange={(value) => handleChange('productLineQuantity', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-17 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.productLineQuantityRate}
              onChange={(value) => handleChange('productLineQuantityRate', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-18 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.productLineQuantityAmount}
              onChange={(value) => handleChange('productLineQuantityAmount', value)}
              pdfMode={pdfMode}
            />
          </View>
        </View>

        {invoice.productLines.map((productLine, i) => {
          return pdfMode && productLine.description === '' ? (
            <Text key={i}></Text>
          ) : (
            <View key={i} className="row flex" pdfMode={pdfMode}>
              <View className="w-48 p-4-8 pb-10" pdfMode={pdfMode}>
                <EditableTextarea
                  className="dark"
                  rows={2}
                  placeholder="Enter item name/description"
                  value={productLine.description}
                  onChange={(value) => handleProductLineChange(i, 'description', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-17 p-4-8 pb-10" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.quantity}
                  onChange={(value) => handleProductLineChange(i, 'quantity', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-17 p-4-8 pb-10" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.rate}
                  onChange={(value) => handleProductLineChange(i, 'rate', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-18 p-4-8 pb-10" pdfMode={pdfMode}>
                <Text className="dark right" pdfMode={pdfMode}>
                  {calculateAmount(productLine.quantity, productLine.rate)}
                </Text>
              </View>
              {!pdfMode && (
                <button
                  className="link row__remove"
                  aria-label="Remove Row"
                  title="Remove Row"
                  onClick={() => handleRemove(i)}
                >
                  <span className="icon icon-remove bg-red"></span>
                </button>
              )}
            </View>
          )
        })}

        <View className="flex" pdfMode={pdfMode}>
          <View className="w-50 mt-10" pdfMode={pdfMode}>
            {!pdfMode && (
              <button className="link" onClick={handleAdd}>
                <span className="icon icon-add bg-green mr-10"></span>
                Add Line Item
              </button>
            )}
          </View>
          <View className="w-50 mt-20" pdfMode={pdfMode}>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.subTotalLabel}
                  onChange={(value) => handleChange('subTotalLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {subTotal?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.taxLabel}
                  onChange={(value) => handleChange('taxLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {saleTax?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex bg-gray p-5" pdfMode={pdfMode}>
              <View className="w-50 p-5" pdfMode={pdfMode}>
                <EditableInput
                  className="bold"
                  value={invoice.totalLabel}
                  onChange={(value) => handleChange('totalLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 p-5 flex" pdfMode={pdfMode}>
                <EditableInput
                  className="dark bold right ml-30"
                  value={invoice.currency}
                  onChange={(value) => handleChange('currency', value)}
                  pdfMode={pdfMode}
                />
                <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                  {(typeof subTotal !== 'undefined' && typeof saleTax !== 'undefined'
                    ? subTotal + saleTax
                    : 0
                  ).toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        
      </Page>
      <br></br>
    </Document>
  )
}


