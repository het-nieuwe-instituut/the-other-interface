import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const Page = ({ errorMessage }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <p>{errorMessage}</p>
}

export const getServerSideProps: GetServerSideProps = async context => {
    return {
        props: {
            errorMessage: context.query.message,
        },
    }
}

export default Page
