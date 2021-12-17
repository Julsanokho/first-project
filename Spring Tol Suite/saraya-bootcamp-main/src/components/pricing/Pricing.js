import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './pricing.css';
import  OIP  from '../../assets/OIP.jpg';
class Pricing extends Component {
    render() {
        return (
            <div class="container-pricipal">

                <div  class="bg-info text-light p-5 p-lg-0 pt-lg-5 test-center text-em-start">
                    <div class="container">
                        <h1><span class="text-warning">Page de paiement</span> en ligne en une étape </h1>
                        <div class="d-sm-flex">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-600" src={OIP} alt="this is OIP image" />
                                        <div class="carousel-caption d-none d-md-block text-warning">
                                            <h5>Best Pricing</h5>
                                            <p>####</p>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                            <div>
                                <h1 class="lead my-5 m-4">Tout savoir<span class="text-warning"> Sur nos mode de paiement</span> </h1>
                                <p class="lead my-5 m-4" > 
                                Text text text text text text text text text text text text text text text text<br/>
                                Text text text text text text text text text text text text text text text text<br/>
                                Text text text text text text text text text text text text text text text text<br/>
                                </p>
                                <p class="lead my-5 m-4">
                                Optnir une meilleur offre de nos formations
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>

                <div class="container-flexible-Paymen">
                    <h1>Plan de paiement flexible</h1>
                </div>
                <hr/>

                <section class="container-card" >
                <div class="container-fluid">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                        <div class="card text-center">
                            <div class="title">
                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                <h2>DUT BTS</h2>
                            </div>
                            <div class="price">
                                <h4><sup>$</sup>25</h4>
                            </div>
                            <div class="option">
                                <ul>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i> DUT, BTS </li>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i> Premier annee DUT, BTS </li>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i> Deuxieme annee DUT, BTS </li>
                                    <li> <i class="fa fa-times" aria-hidden="true"></i> Formation 6 mois </li>
                                </ul>
                            </div>
                            <a href="#">Voir plus </a>
                        </div>
                        </div>
                        
                        <div class="col-sm-4">
                        <div class="card text-center">
                            <div class="title">
                                <i class="fa fa-plane" aria-hidden="true"></i>
                                <h2>Licence</h2>
                            </div>
                            <div class="price">
                                <h4><sup>$</sup>50</h4>
                            </div>
                            <div class="option">
                                <ul>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i> Licence </li>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i> Licence 1 </li>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i> Licence 2 </li>
                                    <li> <i class="fa fa-times" aria-hidden="true"></i> Licence 3</li>
                                </ul>
                            </div>
                            <a href="#">Voir plus </a>
                        </div>
                        </div>
                    
                        <div class="col-sm-4">
                        <div class="card text-center">
                            <div class="title">
                                <i class="fa fa-rocket" aria-hidden="true"></i>
                                <h2>Master</h2>
                            </div>
                            <div class="price">
                                <h4><sup>$</sup>100</h4>
                            </div>
                            <div class="option">
                                <ul>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i> Master </li>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i> Annee 1 BAC + 4 </li>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i>  Annee 2 BAC + 5 </li>
                                    <li> <i class="fa fa-check" aria-hidden="true"></i> Master Indifferent </li>
                                    </ul>
                            </div>
                            <a href="#">Voir plus </a>
                        </div>
                        </div>
                    
                    </div>
                    </div>
                </div>
                </section>

                <div class="container-text">
                    <p class="display-text-1">
                    <h1>Admission & Prix</h1>
                        Nous avons en fait le meilleur prix de l'industrie et les paiements sont très flexibles.
                        Contactez-nous pour les détails des paiements.
                    </p>
                    
                    <p  class="display-text-2">
                    <h3>Stratégies & Plans</h3>
                    Chaque Etudiant à c'est propres prérequis.
                    C'est pourquoi nous avons personnalisé chacun de nos 
                    programmes pour qu'il soit adapter exactement vos besoins.
                    Que ce soit vous ètes un débutant complet ou vous avez une certaine expérience,
                    nous veillerons à ce que vous obteniez 
                    la formation qui vous convient. 
                    </p>
                </div>

            </div>
        );
    }
}
export default Pricing;