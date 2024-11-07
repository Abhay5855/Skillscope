'use client';

import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type SeoTypes = {
	title: string;
	description?: string;
	name?: string;
	type?: string;
};

const Seo: FC<SeoTypes> = ({ title, description, name }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
		</Helmet>
	);
};

export default Seo;
