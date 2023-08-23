import { Box, styled, Text } from '@ignite-ui/react'

export const IntervalBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const IntervalContainer = styled('div', {
  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

export const IntervalDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  '@media(max-width: 600px)': {
    [`> ${Text}`]: {
      maskType: '$2',
      color: '$gray200',
      fontSize: '70%',
    },
  },
})

export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(40%)',
  },

  '@media(max-width: 600px)': {
    scale: '78%',
    gap: '$2',
    marginLeft: '-10px',
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
})
