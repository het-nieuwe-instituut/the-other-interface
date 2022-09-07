const colors = {
    graph: '#CCCED0',
    mainBg: 'rgba(255, 255, 255, 0.85)',
    other: '#CCCED0',
    black: '#000000',
    white: '#ffffff',
    text: {
        default: {
            color: '#000000',
            shadow: '#CCCED0'
        },
        hover: {
            color: '#ffffff',
            shadow: '#CCCED0'
        }
    },
    levels: {
        z0: {
            linkedOpenData: 'radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(124, 124, 124, 0) 100%)'
        },
        z1: {
            archives: {
                default: 'radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(124, 124, 124, 0) 100%)',
                hover1: 'radial-gradient(50% 50% at 50% 50%, #A5D4FF 0%, rgba(87, 114, 255, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)',
                hover2: 'radial-gradient(50% 50% at 50% 50%, #5772FF 0%, rgba(95, 216, 255, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)',
                hover3: 'adial-gradient(50% 50% at 50% 50%, #5FD8FF 0%, rgba(165, 212, 255, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)'
            },
            objects: {
                default: 'radial-gradient(50% 50% at 50% 50%, #F7FF96 0%, rgba(249, 255, 181, 0.12) 100%)',
                hover1: 'radial-gradient(50% 50% at 50% 50%, #A5FFAE 0%, rgba(76, 107, 81, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)',
                hover2: 'radial-gradient(50% 50% at 50% 50%, #4C6B51 0%, rgba(48, 226, 184, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)',
                hover3: 'radial-gradient(50% 50% at 50% 50%, #30E2B8 0%, rgba(165, 255, 174, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)'
            },
            people: {
                default: 'radial-gradient(50% 50% at 50% 50%, #F7FF96 0%, rgba(249, 255, 181, 0.12) 100%)',
                hover1: 'radial-gradient(50% 50% at 50% 50%, #FFA5A5 0%, rgba(255, 149, 238, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)',
                hover2: 'radial-gradient(50% 50% at 50% 50%, #FF95EE 0%, rgba(225, 166, 198, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)',
                hover3: 'radial-gradient(50% 50% at 50% 50%, #E1A6C6 0%, rgba(255, 165, 165, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)'
            },
            publications: {
                default: 'radial-gradient(50% 50% at 50% 50%, #F7FF96 0%, rgba(249, 255, 181, 0.12) 100%)',
                hover1: 'radial-gradient(50% 50% at 50% 50%, #FF3D00 0%, rgba(255, 149, 89, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)',
                hover2: 'radial-gradient(50% 50% at 50% 50%, #FF9559 0%, rgba(138, 42, 9, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)',
                hover3: 'radial-gradient(50% 50% at 50% 50%, #8A2A09 0%, rgba(255, 61, 0, 0.12) 78.13%, rgba(253, 252, 213, 0) 100%)'
            },
            stories: {
                default: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
                hover: 'radial-gradient(50% 50% at 50% 50%, #666666 0%, rgba(102, 102, 102, 0) 100%)'
            }
        },
        z2: {
            archiveFilters: {
                byName: 'radial-gradient(50% 50% at 50% 50%, #A5D4FF 0%, rgba(165, 212, 255, 0) 100%)',
                byDate: 'radial-gradient(50% 50% at 50% 50%, #5772FF 0%, rgba(87, 114, 255, 0) 100%)',
                byDesLevel: 'radial-gradient(50% 50% at 50% 50%, #5FD8FF 0%, rgba(95, 216, 255, 0) 100%)'
            },
            objectFilters: {
                byPerson: 'radial-gradient(50% 50% at 50% 50%, #79A779 0%, rgba(121, 167, 121, 0) 100%)',
                byProject: 'radial-gradient(50% 50% at 50% 50%, #00C170 0%, rgba(0, 193, 112, 0) 100%)',
                bySubject: 'adial-gradient(50% 50% at 50% 50%, #7DCD8A 0%, rgba(125, 205, 138, 0) 100%)',
                byMaker: 'radial-gradient(50% 50% at 50% 50%, #D2FFB7 0%, rgba(210, 255, 183, 0) 100%)',
                byType: 'radial-gradient(50% 50% at 50% 50%, #6B8552 0%, rgba(110, 133, 82, 0) 100%)',
                byDate: 'radial-gradient(50% 50% at 50% 50%, #CFFF8B 0%, rgba(211, 255, 139, 0) 100%)',
                //TODO ask if it's not mistake in color names
                by: 'radial-gradient(50% 50% at 50% 50%, #008A2E 0%, rgba(0, 138, 39, 0) 100%)'
            },
            personFilters: {
                byType: 'radial-gradient(50% 50% at 50% 50%, #F25562 0%, rgba(242, 85, 111, 0) 100%, rgba(242, 85, 98, 0) 100%)',
                byDate: 'radial-gradient(50% 50% at 50% 50%, #F0B3D2 0%, rgba(240, 179, 210, 0) 100%)',
                byPlace: ' radial-gradient(50% 50% at 50% 50%, #FF95ED 0%, rgba(255, 149, 238, 0) 100%)',
                byBirthDate: 'radial-gradient(50% 50% at 50% 50%, #E26565 0%, rgba(226, 101, 101, 0) 100%)',
                byProfession: 'radial-gradient(50% 50% at 50% 50%, #FFA5C3 0%, rgba(255, 165, 165, 0) 100%, rgba(255, 165, 195, 0) 100%)',
                byDeathDate: 'radial-gradient(50% 50% at 50% 50%, #FF4EC4 0%, rgba(255, 78, 196, 0) 100%)'
            },
            publicationsFilter: {
                byAuthor: 'radial-gradient(50% 50% at 50% 50%, #FF9159 0%, rgba(255, 144, 89, 0) 100%)',
                bySubject: 'radial-gradient(50% 50% at 50% 50%, #8A1F09 0%, rgba(138, 31, 9, 0) 100%)',
                byDate: 'radial-gradient(50% 50% at 50% 50%, #FFDB95 0%, rgba(255, 219, 149, 0) 100%)',
                byPerson: 'radial-gradient(50% 50% at 50% 50%, #A28466 0%, rgba(162, 132, 102, 0) 100%)',
                byLocation: 'radial-gradient(50% 50% at 50% 50%, #FF4000 0%, rgba(255, 64, 0, 0) 100%)'
            }
        }
    }
}

export default colors
