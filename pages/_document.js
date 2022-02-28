import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>

            <Head>
                <title>GradientB</title>
                <meta name="description" content="gradient background" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/tailwind.min.css"/>
            </Head>

            <body>
                <Main />
                <div id="modal" />
                <NextScript />
            </body>

        </Html>
    )
}