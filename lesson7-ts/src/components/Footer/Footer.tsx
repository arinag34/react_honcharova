import { Box, Typography } from '@mui/material'

import { FooterProps } from './types'

const Footer = ({ title = '&copy; 2023 - React-Router + Material-UI' }: FooterProps) => {
  return (
    <Box component="footer" width="100%" bgcolor="primary.main" color="white" textAlign="center" p={2}>
      <Typography variant="body1">{title}</Typography>
    </Box>
  )
}

export { Footer }
