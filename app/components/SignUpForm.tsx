'use client'
import React from 'react';
import * as Form from '@radix-ui/react-form';
import Link from 'next/link';

type Props = {}

const SignUpForm = (props: Props) => {
    return (
        <div>
            <Form.Root className="w-[75%] p-2">
                <Form.Field className="grid mb-[10px]" name="email">
                    <div className="flex items-baseline justify-between w-[300px]">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">Email</Form.Label>
                        <Form.Message className="text-[13px] text-red9" match="valueMissing">
                            Please enter your email
                        </Form.Message>
                        <Form.Message className="text-[13px] text-red9" match="typeMismatch">
                            Please provide a valid email
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input
                            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                            type="email"
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="question">
                    <div className="flex items-baseline justify-between w-[300px]">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">
                            Password
                        </Form.Label>
                        <Form.Message className="text-[13px] text-red9" match="valueMissing">
                            Please enter a valid password
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input
                            type='password'
                            pattern='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{8,}$/'
                            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
                            required
                        />
                    </Form.Control>
                    <div id='password-requirements' className='text-[10px] text-slate8 ml-2 mt-1'>
                        <p>At least 8 characters</p>
                        <p>Mix of letters and numbers</p>
                        <p>At least 1 special character</p>
                        <p>At 1 lowercase letter and 1 uppercase letter</p>
                    </div>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="question">
                    <div className="flex items-baseline justify-between w-[300px]">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">
                            Re-enter Password
                        </Form.Label>
                        <Form.Message className="text-[13px] text-red9" match="valueMissing">
                            Passwords do not match
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input
                            type='password'
                            pattern='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{8,}$/'
                            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Submit asChild>
                    <button className="w-[300px]  box-border bg-red9 text-white hover:bg-red9/80 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-5">
                        Sign up
                    </button>
                </Form.Submit>
                <div id='signup-terms' className='w-[300px] flex justify-center mt-2'>
                    <div className='text-[10px] text-slate8 text-center'>
                        By signing up, I accept ThenPixel's <Link href='termsofuse' className=' underline hover:text-red9/80'>terms of use.</Link>
                    </div>
                </div>
                <div className='flex justify-center w-[300px] mt-10'>
                    <div className='flex items-center justify-center gap-8 w-full'>
                        <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
                        <span className='text-xs  text-slate8'>Or</span>
                        <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
                    </div>
                </div>
            </Form.Root>
        </div>
    )
}

export default SignUpForm