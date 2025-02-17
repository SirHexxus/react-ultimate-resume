console.log('Env is ', process.env.NODE_ENV);
require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'local'}` });

module.exports = {
    title: 'React Ultimate Resume',
    tagline: 'Our vision for a clean looking and awesome react-powered dev resume.',
    url: 'https://welovedevs.com/app',
    baseUrl: process.env.BASE_PATH || '/',
    favicon: 'img/favicon.ico',
    organizationName: 'welovedevs', // Usually your GitHub org/user name.
    projectName: 'react-ultimate-resume', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Docs',
            logo: {
                alt: 'WeLoveDevs Logo',
                src: 'https://welovedevs.com/wp-content/uploads/2019/12/logo-menu-welovedevs-220bad.svg'
            },
            links: [
                {
                    href: 'https://welovedevs.com/inspiration',
                    label: 'Blog',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/doc1'
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/udbbbAq'
                        }
                    ]
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/SirHexxus'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/jmswebdesigns'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} James Stacy.`
        }
        // googleAnalytics: {
        //     trackingID: 'UA-71913303-3'
        // }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                    // editUrl: 'https://github.com/welovedevs/docs/website/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};
