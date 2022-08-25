import { Injectable } from '@angular/core';

export interface product{
  name: string
  price: number
  description: string
  instock: boolean
  image: string
  category: string,
  quantity:number
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

Products: product[]=[
  {
    name: 'Luke Skywalker',
    price: 4500,
    description: 'Sneakers',
    instock: false,
    category: 'fashion',
    quantity: 1,
    image: 'https://media.gettyimages.com/vectors/sneakers-mid-vector-id1366255386?k=20&m=1366255386&s=612x612&w=0&h=2of_elmNeWbjqo5lLURCuVTsKLiieSDl2FkcrPN4c8A='
  },
  {
    name: 'Watch',
    price: 4500,
    description: 'G shock',
    instock: false,
    category: 'jewellery',
    quantity: 1,
    image: 'https://cdn.pixabay.com/photo/2020/02/14/18/33/casio-4849118__340.jpg'
  },
  {
    name: 'iPhone',
    price: 4500,
    description: 'X series',
    instock: false,
    category: 'electronics',
    quantity: 1,
    image: 'https://media.gettyimages.com/photos/close-up-of-womans-hand-taking-a-photo-of-local-city-street-view-in-picture-id1324906337?k=20&m=1324906337&s=612x612&w=0&h=NoIvI7VmmmBrZ-Sltv88AKs7c46c_zISW1FVR1ZckoE='
  },
  {
    name: 'Luke Skywalker',
    price: 4500,
    description: 'Sneakers',
    instock: false,
    category: 'fashion',
    quantity: 1,
    image: 'https://media.gettyimages.com/vectors/sneakers-mid-vector-id1366255386?k=20&m=1366255386&s=612x612&w=0&h=2of_elmNeWbjqo5lLURCuVTsKLiieSDl2FkcrPN4c8A='
  },
  {
    name: 'screen',
    price: 4500,
    description: 'samsung',
    instock: false,
    category: 'electronics',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'laptop',
    price: 4500,
    description: 'hp',
    instock: false,
    category: 'electronics',
    quantity: 1,
    image: 'https://media.gettyimages.com/photos/online-collaboration-picture-id1344617512?k=20&m=1344617512&s=612x612&w=0&h=qqxa7UAyHKdyVBdt6LNUN_e4bj2cClK9bLL2cctrkrE='
  },
  {
    name: 'Gold chains',
    price: 4500,
    description: "Mens' fashion",
    instock: false,
    category: 'jewellery',
    quantity: 1,
    image: 'https://cdn.pixabay.com/photo/2017/07/24/19/24/gold-2535774__340.jpg'
  },
]

getProducts(){
  return this.Products
}

getElectronic(){
  const electronic = this.Products.filter((el)=>{
    return el.category == 'electronics'
  })
  return electronic
}

getFashion(){
  const fashion = this.Products.filter((el)=>{
    return el.category == 'fashion'
})
 return fashion 
}


getJewellery(){
  const jewellery = this.Products.filter((el)=>{
    return el.category == 'jewellery'
    })
    return jewellery
}

addNewProduct(newProduct: product){
  return this.Products.push(newProduct)
}
}
