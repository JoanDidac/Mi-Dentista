import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    type?: string;
    path?: string;
    schema?: string;
}

export function SEO({ title, description, type = 'website', path = '', schema }: SEOProps) {
    const url = `https://www.midentistabarcelona.com${path}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <link rel="canonical" href={url} />
            {schema && (
                <script type="application/ld+json">
                    {schema}
                </script>
            )}
        </Helmet>
    );
}
