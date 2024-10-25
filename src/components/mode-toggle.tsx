import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const showMenu = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <DropdownMenu>
      <Button onClick={showMenu} variant="outline" size="icon">
        {
          theme === 'light' ? (
            <>
              <Sun size={20} className='absolute' />
            </>
          ) : (
            <>
              <Moon size={20} className='absolute' />
            </>
          )
        }
      </Button>
    </DropdownMenu>
  );
}