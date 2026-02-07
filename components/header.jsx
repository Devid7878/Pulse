import React from 'react';
import { Button } from './ui/button';
import {
	Calendar,
	CreditCard,
	ShieldCheck,
	Stethoscope,
	User,
} from 'lucide-react';
import PrefetchLink from '@/components/prefetch-link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';
import { Badge } from './ui/badge';
import { checkAndAllocateCredits } from '@/actions/credits';
import Image from 'next/image';

export default async function Header() {
	let user = await checkUser();
	if (user?.role === 'PATIENT') {
		const updatedUser = await checkAndAllocateCredits(user);
		if (updatedUser) {
			user = { ...user, credits: updatedUser.credits };
		}
	}

	return (
		<header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60'>
			<nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
				<PrefetchLink
					href='/'
					className='flex items-center gap-2 cursor-pointer'>
					<Image
						src='/logo__final.png'
						alt='Pulse Logo'
						width={200}
						height={60}
						className='h-12 w-auto object-contain max-sm:hidden'
					/>
					<Image
						src='/Pulse_Only_Icon_Logo.png'
						alt='Pulse Logo'
						width={200}
						height={60}
						className='h-12 w-auto object-contain sm:hidden'
					/>
				</PrefetchLink>

				{/* Action Buttons */}
				<div className='flex items-center space-x-2'>
					<SignedIn>
						{/* Admin Links */}
						{user?.role === 'ADMIN' && (
							<PrefetchLink href='/admin'>
								<Button
									variant='outline'
									className='hidden md:inline-flex items-center gap-2'>
									<ShieldCheck className='h-4 w-4' />
									Admin Dashboard
								</Button>
								<Button
									variant='ghost'
									className='md:hidden w-10 h-10 p-0'>
									<ShieldCheck className='h-4 w-4' />
								</Button>
							</PrefetchLink>
						)}

						{/* Doctor Links */}
						{user?.role === 'DOCTOR' && (
							<PrefetchLink href='/doctor'>
								<Button
									variant='outline'
									className='hidden md:inline-flex items-center gap-2'>
									<Stethoscope className='h-4 w-4' />
									Doctor Dashboard
								</Button>
								<Button
									variant='ghost'
									className='md:hidden w-10 h-10 p-0'>
									<Stethoscope className='h-4 w-4' />
								</Button>
							</PrefetchLink>
						)}

						{/* Patient Links */}
						{user?.role === 'PATIENT' && (
							<PrefetchLink href='/appointments'>
								<Button
									variant='outline'
									className='hidden md:inline-flex items-center gap-2 cursor-pointer'>
									<Calendar className='h-4 w-4' />
									My Appointments
								</Button>
								<Button
									variant='ghost'
									className='md:hidden w-10 h-10 p-0'>
									<Calendar className='h-4 w-4' />
								</Button>
							</PrefetchLink>
						)}

						{/* Unassigned Role */}
						{user?.role === 'UNASSIGNED' && (
							<PrefetchLink href='/onboarding'>
								<Button
									variant='outline'
									className='hidden md:inline-flex items-center gap-2'>
									<User className='h-4 w-4' />
									Complete Profile
								</Button>
								<Button
									variant='ghost'
									className='md:hidden w-10 h-10 p-0'>
									<User className='h-4 w-4' />
								</Button>
							</PrefetchLink>
						)}
					</SignedIn>

					{(!user || user?.role !== 'ADMIN') && (
						<PrefetchLink
							href={user?.role === 'PATIENT' ? '/pricing' : '/doctor'}>
							<Badge
								variant='outline'
								className='h-9 bg-emerald-900/20 border-emerald-700/30 px-3 py-1 flex items-center gap-2'>
								<CreditCard className='h-3.5 w-3.5 text-emerald-400' />
								<span className='text-emerald-400'>
									{user && user.role !== 'ADMIN' ? (
										<>
											{user.credits}{' '}
											<span className='hidden md:inline'>
												{user?.role === 'PATIENT'
													? 'Credits'
													: 'Earned Credits'}
											</span>
										</>
									) : (
										<>Pricing</>
									)}
								</span>
							</Badge>
						</PrefetchLink>
					)}

					<SignedOut>
						<SignInButton>
							<Button variant='secondary'>Sign In</Button>
						</SignInButton>
					</SignedOut>

					<SignedIn>
						<UserButton
							appearance={{
								elements: {
									avatarBox: 'w-10 h-10',
									userButtonPopoverCard: 'shadow-xl',
									userPreviewMainIdentifier: 'font-semibold',
								},
							}}
							afterSignOutUrl='/'
						/>
					</SignedIn>
				</div>
			</nav>
		</header>
	);
}
