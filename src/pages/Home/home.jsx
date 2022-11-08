import { Component } from 'react'
import Banner from '../../components/Banniere/banniere'
import Card from '../../components/Cards/card'

export default class Home extends Component {
  render() {
    return (
      <main>
        <Banner> </Banner>

        <Card></Card>
      </main>
    )
  }
}
