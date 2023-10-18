import styles from './home.module.css';

const Index = () => {
    return (


      <div className={styles.container}>

        <p className={styles.para}>
          <h1>Welcome</h1>
        
        Patients all over the world rely on plasma protein therapies to treat rare, chronic diseases. These individuals
        rely on the generosity and commitment of plasma donors. You may donate plasma in one of more than 900 licensed
        and certified plasma collection centers located in the U.S. and Europe. Plasma often is referred to as the "gift
        of life" because it is the essential starting material needed to manufacture therapies that help thousands of
        people worldwide with rare, chronic diseases to live healthier, productive and fulfilling lives.
          <div className={styles.quoteDiv}>
            <span className={styles.quote}>DONATE PLASMA SAVE LIVES❤️</span>
          </div>
        </p>
      </div>
    
    )
}

export default Index;
