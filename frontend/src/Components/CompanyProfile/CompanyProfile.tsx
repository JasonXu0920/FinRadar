import React, { useState, useEffect } from 'react'
import { CompanyKeyMetrics } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics } from '../../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';

type Props = {}

const tableConfig = [
  {
  label: "Book Value Per Share TTM",
  render: (company: CompanyKeyMetrics) => company.bookValuePerShareTTM,
  subTitle:
    "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
  },
  {
  label: "Divdend Yield TTM",
  render: (company: CompanyKeyMetrics) => company.dividendYieldTTM,
  subTitle: "Shows how much a company pays each year relative to stock price",
  },
  {
  label: "Capex Per Share TTM",
  render: (company: CompanyKeyMetrics) => company.capexPerShareTTM,
  subTitle:
    "Capex is used by a company to aquire, upgrade, and maintain physical assets",
  },
  {
  label: "Graham Number",
  render: (company: CompanyKeyMetrics) => company.grahamNumberTTM,
  subTitle:
    "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
  {
  label: "PE Ratio",
  render: (company: CompanyKeyMetrics) => company.peRatioTTM,
  subTitle:
    "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData]  = useState<CompanyKeyMetrics>();
  useEffect(() => {
    const  getCompanyKeyMetrics = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyMetrics();
  }, []);

  return (
    <>
      {companyData ? (
        <>
          <RatioList data={companyData} config={tableConfig}/>
        </>
      ) : (
        <Spinner></Spinner>
      )
      }
    </>
  )
}

export default CompanyProfile