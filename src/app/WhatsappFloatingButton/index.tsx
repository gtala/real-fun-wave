import { Box, IconButton, Typography } from '@mui/material'
import WhatsappIcon from './WhatsappIcon'
import { useRef } from 'react'
import { useHover } from 'usehooks-ts'

const WhatsappFloatingButton = () => {
  const hoverRef = useRef<HTMLButtonElement>(null)
  const isHover = useHover(hoverRef as any)

  const params = new URLSearchParams({
    phone: "542235300753",
    text: `Hello! I'm interested in booking a Real Fun Wave in Ubatuba.`,
  })

  const messageUrl = `https://api.whatsapp.com/send?${params.toString()}`

  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: { xs: 100, md: 0 },
        left: 0,
        width: '100vw',
        pb: '40px',
        zIndex: 100,
        display: { xs: 'flex', md: 'flex' },
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {isHover && (
        <Typography
          variant="body2"
          fontSize={14}
          color="text.secondary"
          px={1.8}
          py={0.5}
          bgcolor="#56D961"
          borderRadius={20}
        >
          Talk to us
        </Typography>
      )}
      <IconButton
        ref={hoverRef}
        onClick={() => window.open(messageUrl, '_blank')}
      >
        <WhatsappIcon />
      </IconButton>
    </Box>
  )
}

export default WhatsappFloatingButton