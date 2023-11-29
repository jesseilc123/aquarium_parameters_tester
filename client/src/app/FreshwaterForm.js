"use client"; // This is a client component

import * as React from 'react';
import PropTypes from 'prop-types';
import {Unstable_NumberInput as BaseNumberInput} from '@mui/base/Unstable_NumberInput';
import clsx from 'clsx';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export default function FreshwaterForm() {
    const [ammonia, setAmmonia] = React.useState(null)
    const [nitrite, setNitrite] = React.useState(null)
    const [nitrate, setNitrate] = React.useState(null)
    const [chlorine, setChlorine] = React.useState(null)
    const [pH, setPH] = React.useState(null)
    const [gH, setGH] = React.useState(null)
    const [kH, setKH] = React.useState(null)
    const [phosphate, setPhosphate] = React.useState(null)
    const [copper, setCopper] = React.useState(null)


    return (
        <div className="flex justify-center items-center flex-col gap-4">  
            <form autoComplete="off" className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <label className='flex w-24 h-full justify-end items-center'>Ammonia</label>
                    <NumberInput 
                        value={ammonia} 
                        onChange={(event, val) => setAmmonia(val)} 
                        placeholder="ex: 0.25" min={0.00} max={8.00} step={0.25} 
                        endAdornment={<InputAdornment>ppm(mg/L)</InputAdornment>}
                    />
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <label className='flex w-24 h-full justify-end items-center'>Nitrate</label>
                    <NumberInput 
                        value={nitrate} 
                        onChange={(event, val) => setNitrate(val)} 
                        placeholder="ex: 0.25" min={0.00} max={8.00} step={0.25} 
                        endAdornment={<InputAdornment>ppm(mg/L)</InputAdornment>}
                    />
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <label className='flex w-24 h-full justify-end items-center'>Nitrite</label>
                    <NumberInput 
                        value={nitrite} 
                        onChange={(event, val) => setNitrite(val)} 
                        placeholder="ex: 0.25" min={0.00} max={8.00} step={0.25} 
                        endAdornment={<InputAdornment>ppm(mg/L)</InputAdornment>}
                    />
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <label className='flex w-24 h-full justify-end items-center'>Chlorine</label>
                    <NumberInput 
                        value={chlorine} 
                        onChange={(event, val) => setChlorine(val)} 
                        placeholder="ex: 0.25" min={0.00} max={8.00} step={0.25} 
                        endAdornment={<InputAdornment>ppm(mg/L)</InputAdornment>}
                    />
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <label className='flex w-24 h-full justify-end items-center'>pH</label>
                    <NumberInput 
                        value={pH} 
                        onChange={(event, val) => setPH(val)} 
                        placeholder="ex: 0.25" min={0.00} max={8.00} step={0.25} 
                        endAdornment={<InputAdornment>ppm(mg/L)</InputAdornment>}
                    />
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <label className='flex w-24 h-full justify-end items-center'>GH</label>
                    <NumberInput 
                        value={gH} 
                        onChange={(event, val) => setGH(val)} 
                        placeholder="ex: 0.25" min={0.00} max={8.00} step={0.25} 
                        endAdornment={<InputAdornment>ppm(mg/L)</InputAdornment>}
                    />
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <label className='flex w-24 h-full justify-end items-center'>KH</label>
                    <NumberInput 
                        value={kH} 
                        onChange={(event, val) => setKH(val)} 
                        placeholder="ex: 0.25" min={0.00} max={8.00} step={0.25} 
                        endAdornment={<InputAdornment>ppm(mg/L)</InputAdornment>}
                    />
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <label className='flex w-24 h-full justify-end items-center'>Phosphate</label>
                    <NumberInput 
                        value={phosphate} 
                        onChange={(event, val) => setPhosphate(val)} 
                        placeholder="ex: 0.25" min={0.00} max={8.00} step={0.25} 
                        endAdornment={<InputAdornment>ppm(mg/L)</InputAdornment>}
                    />
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <label className='flex w-24 h-full justify-end items-center'>Copper</label>
                    <NumberInput 
                        value={copper} 
                        onChange={(event, val) => setCopper(val)} 
                        placeholder="ex: 0.25" min={0.00} max={8.00} step={0.25} 
                        endAdornment={<InputAdornment>ppm(mg/L)</InputAdornment>}
                    />
                </div>
            </form>
            <Button className="text-black dark:text-blue-400 font-medium dark:bg-grey-800 bg-grey-200 hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-grey-900" variant="contained">Submit</Button>
        </div>
    );
}

const InputAdornment = styled('div')(
    ({ theme }) => `
        margin: 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        grid-row: 1/3;
        color: #a9a9a9;
    `,
);

const resolveSlotProps = (fn, args) => (typeof fn === 'function' ? fn(args) : fn);

const NumberInput = React.forwardRef(function NumberInput(props, ref) {
  return (
    <BaseNumberInput
      {...props}
      ref={ref}
      slotProps={{
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              'grid grid-cols-2 overflow-hidden w-1/2 font-sans rounded-lg text-grey-900 dark:text-grey-300 border border-solid bg-white dark:bg-grey-900 hover:border-blue-400 dark:hover:border-blue-400 focus-visible:outline-0 p-1',
              ownerState.focused
                ? 'border-blue-400 dark:border-blue-400 shadow-lg shadow-outline-blue dark:shadow-outline-blue'
                : 'border-grey-300 dark:border-grey-600 shadow-md shadow-grey-100 dark:shadow-grey-900',
              resolvedSlotProps?.className,
            ),
          };
        },
        input: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.input,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              'col-start-1 col-end-2 row-start-1 row-end-3 text-sm font-sans leading-normal text-grey-900 bg-inherit border-0 rounded-[inherit] dark:text-grey-300 px-3 py-2 outline-0 focus-visible:outline-0 focus-visible:outline-none',
              resolvedSlotProps?.className,
            ),
          };
        },
        incrementButton: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.incrementButton,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            children: '▴',
            className: clsx(
              'font-[system-ui] flex flex-row flex-nowrap justify-center items-center p-0 w-[19px] h-[19px] border border-solid outline-none text-sm box-border leading-[1.2] rounded-t-md border-grey-200 bg-grey-50 dark:bg-grey-900 text-grey-900 dark:text-grey-300 transition-all duration-[120ms] hover:cursor-pointer hover:bg-blue-500 hover:text-grey-50 dark:hover:bg-grey-800 dark:border-grey-600 col-start-3 col-end-3 row-start-1 row-end-2',
              resolvedSlotProps?.className,
            ),
          };
        },
        decrementButton: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.decrementButton,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            children: '▾',
            className: clsx(
              'font-[system-ui] flex flex-row flex-nowrap justify-center items-center p-0 w-[19px] h-[19px] border border-solid outline-none text-sm box-border leading-[1.2] rounded-b-md border-grey-200 border-t-0 bg-grey-50 dark:bg-grey-900 text-grey-900 dark:text-grey-300 transition-all duration-[120ms] hover:cursor-pointer hover:bg-blue-500 hover:text-grey-50 dark:hover:bg-grey-800 dark:border-grey-600 col-start-3 col-end-3 row-start-2 row-end-3',
              resolvedSlotProps?.className,
            ),
          };
        },
      }}
    />
  );
});

NumberInput.propTypes = {
  /**
   * The props used for each slot inside the NumberInput.
   * @default {}
   */
  slotProps: PropTypes.shape({
    decrementButton: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    incrementButton: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};
