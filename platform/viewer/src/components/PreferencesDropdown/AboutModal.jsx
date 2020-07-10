import React from 'react';
import { Typography, Icon } from '@ohif/ui';

const Link = ({ href, children, showIcon = false }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Typography
        variant="subtitle"
        component="p"
        className="flex items-center text-primary-active"
      >
        {children}
        {!!showIcon && (
          <Icon name="external-link" className="w-5 text-white ml-2" />
        )}
      </Typography>
    </a>
  );
};

const Row = ({ title, value, link }) => {
  return (
    <div className="flex mb-4">
      <Typography variant="subtitle" component="p" className="text-white w-48">
        {title}
      </Typography>

      {link ? (
        <Link href={link}>{value}</Link>
      ) : (
        <Typography
          variant="subtitle"
          component="p"
          className="text-white w-48"
        >
          {value}
        </Typography>
      )}
    </div>
  );
};

const AboutModal = () => {
  const renderRowTitle = title => (
    <div className="border-b-2 border-black pb-3 mb-3">
      <Typography variant="h6" className="text-primary-light">
        {title}
      </Typography>
    </div>
  );
  return (
    <div>
      {renderRowTitle('Important Links')}
      <div className="flex mb-8">
        <Link
          href="https://groups.google.com/forum/#!forum/cornerstone-platform"
          showIcon={true}
        >
          Visit the forum
        </Link>
        <span className="ml-4">
          <Link
            href="https://github.com/OHIF/Viewers/issues/new/choose"
            showIcon={true}
          >
            Report an issue
          </Link>
        </span>
        <span className="ml-4">
          <Link href="http://ohif.org/" showIcon={true}>
            More details
          </Link>
        </span>
      </div>

      {renderRowTitle('Version Information')}
      <div className="flex flex-col">
        <Row
          title="Repository URL"
          value="https://github.com/OHIF/Viewers/"
          link="https://github.com/OHIF/Viewers/"
        />
        <Row
          title="Last Master Commits"
          value="https://github.com/OHIF/Viewers/commits/master"
          link="https://github.com/OHIF/Viewers/commits/master"
        />
        <Row title="Version Number" value="2.90" />
        <Row title="Build number" value="7140" />
        <Row title="Browser" value="Chrome 83.0.4130" />
        <Row title="OS" value="OS X 10.15.5" />
      </div>
    </div>
  );
};

export default AboutModal;
