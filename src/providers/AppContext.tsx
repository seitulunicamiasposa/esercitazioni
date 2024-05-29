import { createContext } from 'react'
import TNote from '../types/commontypes';

export interface IAppContext {
    jsonData: TNote[] | undefined;
    setJsonData: (args: TNote[]) => void;
    selectedNote: TNote | undefined;
    setSelectedNote: (args: TNote) => void
}

export const AppContext = createContext<IAppContext | null>(null);

