import { Button, ButtonGroup } from '@chakra-ui/react'

export const Card = (props) => {
    return (
        <>
            <Button rightIcon={<ArrowForwardIcon />} variant='outline'>
                {props.text}
            </Button>
        </>
    )
}
