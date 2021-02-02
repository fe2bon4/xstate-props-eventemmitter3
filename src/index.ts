import { Interpret } from './machines/<machine_name>'


const service = Interpret({
  encryption: {
    encryption_iv: 'TEST',
    encryption_key: 'TEST'
  }
})

service.start()