import { Flex, Text, useBreakpoint, Link } from "@chakra-ui/react"


const linksMockTop = [
    {
        title: 'Exhibitions and activities',
        to: '/'
    }, 
    {
        title: 'Browse our web magazines',
        to: '/'
    }, {
        title: 'Subscribe to our newsletter',
            to: '/'
    }
]

export const Footer = () => {
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'sm'
    return (
        <Flex justifyContent={'space-between'} minHeight={'185px'} px={'8'} pt={'24'} marginX={'auto'} maxWidth={'90em'} paddingTop={'36px'} paddingBottom={'36px'}>
            <Flex backgroundColor={'blue'} flex={0.16}>
                <Text textStyle='h3' css={{ transform: "rotate(180deg)", writingMode: "vertical-rl"}}>Het Nieuwe Instituut</Text>
            </Flex>
            <Flex justifyContent={'space-between'} flex={0.76}>
                {/* on mobile should be different flex */}
                <Flex backgroundColor={'red'} flex={0.3} flexDirection={'column'} justifyContent={'space-between'}>
                    <Text textStyle={'body'}>
                        Het Nieuwe Instituut Museumpark 25 3015CB Rotterdam
                    </Text>
                    <Text textStyle={'body'}>
                        +31(0)10-4401200 Info@hetnieuweinstituut.net
                    </Text>
                </Flex>
                {
                    isMobile ? (
                        <></>
                    ) : (
                        <Flex backgroundColor={'grey'} flex={0.3}>
                            <>
                            {
                                linksMockTop.map(link => (
                                    <Link  
                                        key={Math.random()}
                                        href={`${link.to}`}
                                        variant={'decorative'}
                                        cursor="pointer"
                                        textStyle="small">
                                            {link.title} 
                                            </Link>
                                ))
                            }
                            </>
                            
                        </Flex>
                    )
                }
                
                <Flex backgroundColor={'black'} flex={0.1}>

                </Flex>
            </Flex>
            
        </Flex>    
    )
}