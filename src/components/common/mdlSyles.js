export const mdlStyles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        [theme.breakpoints.up(880 + theme.spacing.unit * 3 * 2)]: {
            width: 880,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px
                ${theme.spacing.unit}px 
                ${theme.spacing.unit * 2}px 
                ${theme.spacing.unit}px`
    },
    paperAtNight: {
        backgroundColor: '#343f63',
        color: 'white',
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px
                ${theme.spacing.unit}px 
                ${theme.spacing.unit * 2}px 
                ${theme.spacing.unit}px`
    },
    card: {
        minWidth: 275,
        media: {
            // ⚠️ object-fit is not supported by IE 11.
            objectFit: 'cover',
        },
        button: {
            margin: {
                margin: theme.spacing.unit * 2,
            },
            padding: {
                padding: `0 ${theme.spacing.unit * 2}px`,
            }
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            marginBottom: 16,
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        }
    }
});