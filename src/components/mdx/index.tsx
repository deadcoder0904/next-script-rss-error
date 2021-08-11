import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

export const MDXComponents = {}

interface IMDXLayoutRenderer {
	mdxSource?: any
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }: IMDXLayoutRenderer) => {
	const MDXLayout = React.useMemo(() => getMDXComponent(mdxSource), [mdxSource])

	return <MDXLayout components={MDXComponents} {...rest} />
}
