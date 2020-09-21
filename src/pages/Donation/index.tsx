import React, { FormEvent } from 'react'
import { MdCreditCard } from 'react-icons/md';
import Swal from 'sweetalert2'

import api from '../../services/api'

import './styles.scss'

export default() => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const link = 'https://tmj-hackaton.herokuapp.com/ong'
        const body = { mensagem: `Obrigado pela sua doação! Agora, para continuar acompanhando o resultado das suas doações, acesse esse link: ${link}.` }
        
        try {
            await api.post('/zenvia/viaWhats', body);

            Swal.fire({
                icon: 'success',
                title: 'Doação enviada com sucesso!'
            })

        } catch (error) {
            console.log(error)

            Swal.fire({
                icon: 'error',
                title: 'Falha no servidor. Tente novamente mais tarde.'
            })
        }
    } 

	return (
        <main className="donation">
            <h1>Doar para ONG X</h1>
            <span>Escolha o método de pagamento a seguir</span>

            <section className="buttons-container">
                <button><MdCreditCard /></button>
                <button>PayPal</button>
            </section>

            <section>
                <form onSubmit={handleSubmit} className="col-2">
                    <section className="ong">
                        <h3>Informações de cobrança</h3>

                        <div className="input-block">
                            <label htmlFor="fullName"> NOME COMPLETO </label>
                            <input type="text" name="" id="fullName"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="email"> ENDEREÇO </label>
                            <input type="text" name="" id=""/>
                        </div>

                        <div className="input-group">
                            <div className="input-block">
                                <label htmlFor="email"> CIDADE </label>
                                <input type="text" name="" id=""/>
                            </div>

                            <div className="input-block">
                                <label htmlFor="email"> CEP </label>
                                <input type="text" name="" id=""/>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="input-block" style={{marginBottom: 0}}>
                                <label htmlFor="email"> ESTADO </label>
                                <input type="text" name="" id=""/>
                            </div>

                            <div className="input-block" style={{marginBottom: 0}}>
                                <label htmlFor="email"> PAÍS </label>
                                <input type="text" name="" id=""/>
                            </div>
                        </div>

                        <div className="input-block">
                            <label htmlFor="email"> WHATSAPP </label>
                            <input type="text" name="" id=""/>
                        </div>
                    </section>
                    
                    <section className="ongValues">
                        <h3>Cartão de crédito</h3>

                        <div className="input-block">
                            <label htmlFor="email"> NÚMERO DO CARTÃO </label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="email"> NOME DO CARTÃO </label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="email"> DATA DE EXPIRAÇÃO </label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="email"> CVV </label>
                            <input type="text" name="" id=""/>
                        </div>

                        <button type="submit" className="purple-button" title="Clique para doar">doar</button>
                    </section>
                </form>
            </section>
        </main>
	)
}
