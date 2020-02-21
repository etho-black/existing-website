//import HomeBranding from '../pages/HomeBranding'
import HomeSoftware from '../pages/HomeSoftware'
import HomeStartUp from '../pages/HomeStartUp'
import HomeShowcase from '../pages/HomeShowcase'
import HomePayment from '../pages/HomePayment'
import HomeAgency from '../pages/HomeAgency'
import HomeProductShowcase from '../pages/HomeProductShowcase'
import ElementAccordion from '../pages/elements/ElementAccordion'
import ElementGradation from '../pages/elements/ElementGradation'
import ElementBoxIcon from '../pages/elements/ElementBoxIcon'
import ElementButtons from '../pages/elements/ElementButtons'
import ElementCta from '../pages/elements/ElementCta'
import ElementPopupVideo from '../pages/elements/ElementPopupVideo'
import ElementPricingBox from '../pages/elements/ElementPricingBox'
import ElementProgressBar from '../pages/elements/ElementProgressBar'
import ElementProgressCircle from '../pages/elements/ElementProgressCircle'
import ElementTeamMember from '../pages/elements/ElementTeamMember'
import ElementTestimonial from '../pages/elements/ElementTestimonial'
import ElementCounters from '../pages/elements/ElementCounters'
import NotFound from '../pages/elements/404'

export const routes = [
    {
        path:'/',
        name: 'HomeStartUp',
        component: HomeStartUp
    },
    {
        path:'/software',
        name: 'HomeSoftware',
        component: HomeSoftware
    },
    {
        path:'/Showcase',
        name: 'HomeShowcase',
        component: HomeShowcase
    },
    {
        path:'/payment',
        name: 'HomePayment',
        component: HomePayment
    },
    {
        path:'/agency',
        name: 'HomeAgency',
        component: HomeAgency
    },
    {
        path:'/product-showcase',
        name: 'HomeProductShowcase',
        component: HomeProductShowcase
    },
    {
        path:'/element-accordion',
        name: 'ElementAccordion',
        component: ElementAccordion
    },
    {
        path:'/element-gradation',
        name: 'ElementGradation',
        component: ElementGradation
    },
    {
        path:'/element-box-icon',
        name: 'ElementBoxIcon',
        component: ElementBoxIcon
    },
    {
        path:'/element-buttons',
        name: 'ElementButtons',
        component: ElementButtons
    },
    {
        path:'/element-cta',
        name: 'ElementCta',
        component: ElementCta
    },
    {
        path:'/element-popup-video',
        name: 'ElementPopupVideo',
        component: ElementPopupVideo
    },
    {
        path:'/element-pricing-box',
        name: 'ElementPricingBox',
        component: ElementPricingBox
    },
    {
        path:'/element-progress-bar',
        name: 'ElementProgressBar',
        component: ElementProgressBar
    },
    {
        path:'/element-progress-circle',
        name: 'ElementProgressCircle',
        component: ElementProgressCircle
    },
    {
        path:'/element-team-member',
        name: 'ElementTeamMember',
        component: ElementTeamMember
    },
    {
        path:'/element-testimonial',
        name: 'ElementTestimonial',
        component: ElementTestimonial
    },

    {
        path:'/element-counters',
        name: 'ElementCounters',
        component: ElementCounters
    },
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
];
