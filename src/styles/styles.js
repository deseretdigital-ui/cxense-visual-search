module.exports = {
  resultColumn: {
    float: 'left',
    width: '58%'
  },
  questionsColumn: {
    float: 'right',
    width: '40%'
  },
  answers: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    height: 320
  },
  answer: {
    display: 'inline-block',
    margin: 5,
    paddingTop: 65,
    fontSize: 20,
    fontWeight: 600,
    width: 150,
    height: 150,
    textAlign: 'center',
    backgroundColor: 'dodgerblue',
    color: 'white',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  carTitle: {
    marginBottom: 0
  },
  miles: {
    margin: 0,
    marginBottom: 8,
    fontSize: 14
  },
  price: {
    marginTop: 0,
    fontSize: 20,
    color: '#2354ac'
  },
  hr: {
    border: 'none',
    backgroundColor: '#363636',
    height: 1
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#2354ac',
    color: 'white',
    display: 'inline-block'
  }
}
