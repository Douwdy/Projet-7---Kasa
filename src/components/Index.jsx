import Logements from './Thumbnail';
import logementsData from '../logements.json';
import illustration from '../assets/paysage1.png';
import { Fragment } from 'react';

const Index = () => {
    return (
        <Fragment>
            <div className='banner'>
                <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
                <img src={illustration} alt='paysage' className='banner-illustration'/>
            </div>
            <section className='logements'>
            <Logements logementsData={logementsData}/>
            </section>
        </Fragment>
    );
};

export default Index;