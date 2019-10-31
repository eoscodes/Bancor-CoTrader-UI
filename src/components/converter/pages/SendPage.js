import React from 'react'
import SendModal from '../modals/SendModal'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ArrowRight } from '@material-ui/icons';
import pageStyles from '../../../css/pageStyles'

const useStyles = pageStyles


function SendPage() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}><ArrowRight className={classes.icon} /></span>;
  return (
    <React.Fragment>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom component="h2">
          Trade and send via Bancor
        </Typography>
        <Typography variant="body1" className={'mb-2'} component="p">
          {bull} This page allows trade and send to any ETH address.
          </Typography>
          <Typography variant="body1" className={'mb-2'} component="p">
          {bull} Please be careful when choosing unverified tokens.
          </Typography>
          <Typography variant="body1" className={'mb-2'} component="p">
          {bull} More updates coming soon.
        </Typography>
        <Typography className={classes.modal} component="div">
          <SendModal/>
        </Typography>
      </CardContent>
      {/*<CardActions className={classes.footer}>
        <Typography className={classes.footertext} color="textSecondary">
          DEX is free trade. Let freedom ring. This is a free, open source, unrestricted portal into the <a href="http://Bancor.network" rel="noopener noreferrer" target="_blank">Bancor.network</a>, made by <a href="https://about.cotrader.com/" rel="noopener noreferrer" target="_blank">CoTrader</a>
        </Typography>
      </CardActions>*/}
    </Card>
    </React.Fragment>
  )
}
export default SendPage
