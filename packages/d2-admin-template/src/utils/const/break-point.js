import { fromPairs } from 'lodash-es'

export const breakPointsName = ['sm', 'md', 'lg', 'xl', 'xxl']

export const breakPointsWidth = [640, 768, 1024, 1280, 1536]

export const breakPoints = fromPairs(breakPointsName.map((e, i) => [e, breakPointsWidth[i]]))
