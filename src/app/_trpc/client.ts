import { AppRouter } from '@/trpc';
import {createTRPCReact} from '@trpc/react-query';
import React from 'react';


export const trpc = createTRPCReact<AppRouter>({})

