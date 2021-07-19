import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: 'Startup',
    option : 'a'
  },
  {
    name: 'Business',
    option : 'b'
  },
  {
    name: 'Capital',
    option : 'c'
  },
  {
    name: 'Enterprise',
    option : 'd'
  },
]

const Options = () => {
  const [selected, setSelected] = useState(plans[0])
  console.log(selected.option);
  return (
          <div className="md:row-span-3 col-span-4 md:col-span-2 py-4 h-full bg-githubTheme-blue300 bg-opacity-5 flex items-center justify-center  rounded-md px-5 text-gray-300">
        <RadioGroup value={selected} onChange={setSelected} className="w-full mx-2">
          <div className="space-y-4">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? ''
                      : ''
                  }
                  ${
                    checked ? 'bg-githubTheme-blue200 bg-opacity-10' : 'bg-githubTheme-blue300 bg-opacity-5'
                  }
                    relative rounded-md hover:bg-githubTheme-blue200 hover:bg-opacity-10 outline-none shadow-md text-gray-50 px-5 py-4 cursor-pointer flex focus:outline-none w-full transition-all duration-300`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-lg">
                          <RadioGroup.Label
                            className={`font-medium capitalize`}
                          >
                            <span className="text-githubTheme-blue200">{plan.option} </span>{` : ${plan.name}`}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-gray-100">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
  )
}
export default  Options ;

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
