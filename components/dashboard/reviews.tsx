"use client";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export function Reviews() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full items-center justify-center my-5">
      <Image
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        width={40}
        height={40}
        alt=""
      />
      <Image
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        width={40}
        height={40}
        alt=""
      />
      <Image
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        }
        width={40}
        height={40}
        alt=""
      />
      <Image
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        width={40}
        height={40}
        alt=""
      />
      <span className="font-bold ml-4 mr-1 text-primary">1728</span>{" "}
      {t("dashboard:reviews", { count: 1728 })}
    </div>
  );
}
