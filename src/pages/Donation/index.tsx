import React from 'react'

import './styles.scss'

export default() => {
	return(
        <main className="donation">
            <section>
                <h1>Doar para ONG X</h1>
                <h3>Escolha o método de pagamento a seguir</h3>
                <div>cartão</div>
                <div>paypal</div>
            </section>
            <section>
                <form>
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

                        <div className="input-block">
                            <label htmlFor="email"> CIDADE </label>
                            <input type="text" name="" id=""/>

                            <label htmlFor="email"> CEP </label>
                            <input type="text" name="" id=""/>
                        </div>

                        <div className="input-block">
                            <div>
                                <label htmlFor="email"> ESTADO </label>
                                <input type="text" name="" id=""/>
                            </div>

                            <div>
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

                        <button type="submit" className="purple-button">doar</button>
                    </section>
                </form>
            </section>
        </main>
	)
}
